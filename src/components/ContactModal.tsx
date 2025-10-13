import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessonName?: string;
  type?: 'consultation' | 'lesson';
}

const ContactModal: React.FC<ContactModalProps> = ({ 
  isOpen, 
  onClose, 
  lessonName,
  type = 'consultation'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link as fallback
      const subject = type === 'lesson' 
        ? `Rezervace lekce: ${lessonName}` 
        : 'Žádost o konzultaci';
      
      const body = `Jméno: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone || 'neuvedeno'}
${lessonName ? `Lekce: ${lessonName}` : ''}

Zpráva:
${formData.message || 'Bez zprávy'}`;

      const mailtoLink = `mailto:katarina.lapackova@seznam.cz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open mailto link
      window.location.href = mailtoLink;
      
      toast({
        title: "Otevírám e-mail!",
        description: type === 'lesson' 
          ? "E-mailový klient se otevře s předvyplněnými údaji pro rezervaci lekce." 
          : "E-mailový klient se otevře s předvyplněnými údaji pro konzultaci.",
      });
      
      // Analytics tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          form_type: type,
          lesson_name: lessonName || ''
        });
      }
      
      // Reset form and close modal
      setFormData({ name: '', email: '', phone: '', message: '' });
      onClose();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Chyba při odesílání",
        description: "Zkus to prosím znovu nebo mi napiš přímo na email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {type === 'lesson' 
              ? `Rezervace: ${lessonName}` 
              : 'Domluvit konzultaci'
            }
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Jméno *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              placeholder="Tvoje jméno"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              placeholder="tvuj@email.cz"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Telefon</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="734 439 196"
            />
          </div>
          
          <div>
            <Label htmlFor="message">Zpráva</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={
                type === 'lesson' 
                  ? "Napiš mi, jestli máš nějaké dotazy nebo omezení..." 
                  : "Napiš mi, co tě zajímá a kdy bys měl/a čas na konzultaci..."
              }
              rows={4}
            />
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Zrušit
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? 'Odesílám...' : 'Odeslat'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
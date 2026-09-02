import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface ContactConfirmationProps {
  name?: string
}

function ContactConfirmation({ name = '' }: ContactConfirmationProps) {
  return (
    <Html lang="pt">
      <Head />
      <Preview>Recebemos o teu pedido. Respondemos em breve.</Preview>
      <Body style={{ backgroundColor: '#f5f4f0', fontFamily: 'Georgia, serif' }}>
        <Container
          style={{
            backgroundColor: '#ffffff',
            margin: '32px auto',
            padding: '40px',
            maxWidth: '560px',
            border: '1px solid #e2e0d8',
          }}
        >
          <Text
            style={{
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#a3a194',
              margin: '0 0 8px',
            }}
          >
            Core&More Pilates Studio
          </Text>
          <Heading
            style={{ fontSize: '24px', fontWeight: 400, color: '#3a3833', margin: '0 0 24px' }}
          >
            Recebemos o teu pedido
          </Heading>
          <Hr style={{ borderColor: '#e2e0d8', margin: '0 0 24px' }} />
          <Section>
            <Text style={{ fontSize: '14px', color: '#3a3833', lineHeight: '1.7' }}>
              Olá{name ? ` ${name}` : ''},
            </Text>
            <Text style={{ fontSize: '14px', color: '#3a3833', lineHeight: '1.7' }}>
              Obrigado pelo teu contacto. Recebemos o teu pedido e vamos responder
              com as próximas vagas disponíveis o mais brevemente possível.
            </Text>
            <Text style={{ fontSize: '14px', color: '#3a3833', lineHeight: '1.7' }}>
              Para uma resposta mais rápida, podes falar connosco pelo{' '}
              <Link
                href="https://wa.me/351914409173?text=Ol%C3%A1%2C%20Core%26More%20Pilates!%20%F0%9F%98%8A%20Vi%20as%20informa%C3%A7%C3%B5es%20na%20vossa%20p%C3%A1gina%20e%20gostaria%20de%20esclarecer%20uma%20d%C3%BAvida.%20Podem%20ajudar-me%3F"
                style={{ color: '#7c7566' }}
              >
                WhatsApp
              </Link>
              .
            </Text>
          </Section>
          <Hr style={{ borderColor: '#e2e0d8', margin: '24px 0' }} />
          <Text style={{ fontSize: '12px', color: '#8a877c', margin: 0 }}>
            Core&More Pilates Studio · R. Dom João I, 292, 4450-189 Matosinhos · 914 409 173
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: ContactConfirmation,
  subject: 'Recebemos o teu pedido · Core&More Pilates',
  displayName: 'Confirmação ao visitante',
  previewData: { name: 'Maria' },
} satisfies TemplateEntry

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface ContactNotificationProps {
  name?: string
  email?: string
  phone?: string
  message?: string
}

function ContactNotification({
  name = '',
  email = '',
  phone = '',
  message = '',
}: ContactNotificationProps) {
  return (
    <Html lang="pt">
      <Head />
      <Preview>Novo pedido de marcação de {name || 'um visitante'}</Preview>
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
            Novo pedido de marcação
          </Heading>
          <Hr style={{ borderColor: '#e2e0d8', margin: '0 0 24px' }} />
          <Section>
            <Text style={{ fontSize: '14px', color: '#3a3833', margin: '0 0 4px' }}>
              <strong>Nome:</strong> {name}
            </Text>
            <Text style={{ fontSize: '14px', color: '#3a3833', margin: '0 0 4px' }}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={{ fontSize: '14px', color: '#3a3833', margin: '0 0 16px' }}>
              <strong>Telefone:</strong> {phone || 'Não indicado'}
            </Text>
            <Text
              style={{
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#a3a194',
                margin: '0 0 8px',
              }}
            >
              Mensagem
            </Text>
            <Text
              style={{
                fontSize: '14px',
                color: '#3a3833',
                lineHeight: '1.6',
                whiteSpace: 'pre-wrap',
                margin: 0,
              }}
            >
              {message}
            </Text>
          </Section>
          <Hr style={{ borderColor: '#e2e0d8', margin: '24px 0' }} />
          <Text style={{ fontSize: '12px', color: '#8a877c', margin: 0 }}>
            Enviado a partir do formulário de contacto em coremorepilates.app
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: ContactNotification,
  subject: (data: Record<string, any>) =>
    `Novo pedido de marcação${data.name ? ` · ${data.name}` : ''}`,
  displayName: 'Notificação de pedido de marcação',
  to: 'limagabriel.0006@gmail.com',
  previewData: {
    name: 'Maria Silva',
    email: 'maria@exemplo.com',
    phone: '912 345 678',
    message: 'Gostaria de marcar uma aula individual de Pilates com aparelhos.',
  },
} satisfies TemplateEntry

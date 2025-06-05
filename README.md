# nestjs-proxy-logger

Projeto NestJS com suporte a logging avançado utilizando [Pino](https://getpino.io/) e `Proxy` para interceptar automaticamente chamadas de métodos de serviços.

## ✨ Funcionalidades

- Aplicação NestJS estruturada com TypeScript
- Logging customizado usando Pino
- Proxy dinâmico para logar chamadas de métodos, argumentos, retornos e erros
- JSON nos logs exibido inline para melhor legibilidade
- Modularização por domínio (exemplo: `BrokerService`)

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/nestjs-proxy-logger.git
cd nestjs-proxy-logger
yarn install
```

## Exemplo de log gerado

```json
07:23:55.079] INFO (27113): [BrokerService.sendMessage] called
    args: [
      "filaX",
      {
        "hello": "world"
      }
    ]
[07:23:55.079] INFO (27113): [BrokerService.sendMessage] resolved
    result: {
      "status": "sent",
      "queue": "filaX",
      "message": {
        "hello": "world"
      }
    }
[07:23:55.079] INFO (27113): [BrokerService.getQueueInfo] called
    args: [
      "filaX"
    ]
[07:23:55.079] INFO (27113): [BrokerService.getQueueInfo] returned
    result: {
      "queue": "filaX",
      "messages": 42
    }
```

import { FastMCP } from 'fastmcp'
import { z } from 'zod'

const server = new FastMCP({
  name: 'My Server',
  version: '0.0.1',
})

server.addTool({
  name: 'add',
  description: 'Add two numbers',
  parameters: z.object({
    a: z.number(),
    b: z.number(),
  }),
  execute: async (args, { log }) => {
    const sum = String(args.a + args.b)
    log.info('addTool result', { sum })
    return sum
  },
})

server.start({
  transportType: 'httpStream',
  httpStream: { port: 8585 },
})

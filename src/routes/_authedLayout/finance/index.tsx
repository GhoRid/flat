import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authedLayout/finance/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authedLayout/financialManagement/"!</div>
}

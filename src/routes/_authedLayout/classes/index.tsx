import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authedLayout/classes/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authedLayout/class-management/"!</div>
}

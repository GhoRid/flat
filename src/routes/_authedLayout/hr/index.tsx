import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authedLayout/hr/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authedLayout/instructor-management/"!</div>
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authedLayout/consultations/')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/_authedLayout/consultation-management/"!</div>
}

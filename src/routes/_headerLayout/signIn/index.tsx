import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_headerLayout/signIn/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authedLayout/signIn/"!</div>
}

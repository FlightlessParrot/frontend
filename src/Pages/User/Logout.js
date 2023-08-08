import useLogout from "../../hooks/useLogout"

export default function Logout() {
    const logout=useLogout()
  return (
    <div>Za chwilę zostaniesz wylogowany</div>
  )
}
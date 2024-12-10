export default async function DashboardLayout({
    children,
    params,
  }: {
    children: React.ReactNode
    params: Promise<{ team: string }>
  }) {
    const { team } = await params
   
    return (
      <section>
        <header>
          <h1>Welcome to {team}'s Dashboard</h1>
        </header>
        <main>{children}</main>
      </section>
    )
  }
import { BuilderPage } from '@/builder/BuilderPage/BuilderPage'

interface PageProps {
  params: Promise<{ page: string[] }>
}

export default async function Page(props: PageProps) {
  const { page } = await props.params

  return (
    <>
      <BuilderPage url={page || ''} />
    </>
  )
}

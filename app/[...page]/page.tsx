import { BuilderPage } from '@/builder/BuilderPage/BuilderPage'

interface PageProps {
  params: {
    page: string[]
  }
}

export default async function Page(props: PageProps) {
  return (
    <>
      <BuilderPage url={props.params.page || ''} />
    </>
  )
}

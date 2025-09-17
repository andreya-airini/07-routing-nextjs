import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ slug?: string[] }>; // params приходить як проміс
};

export default async function NotesPage({ params }: Props) {
  const { slug } = await params; // чекаємо на params
  const tagParam = slug?.[0];
  const tag = tagParam === "all" ? undefined : tagParam;

  return <NotesClient tag={tag} />;
}

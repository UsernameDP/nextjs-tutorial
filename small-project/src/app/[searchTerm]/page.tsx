import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`
    };
  }

  return {
    title: `WikiSearch : ${displayTerm}`
  };
}

export default async function SearchTermPage({
  params: { searchTerm }
}: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");
  const results: Result[] | undefined = data?.query?.pages;

  return (
    <main className="flex flex-col mx-auto max-w-2xl w-11/12 h-full bg-slate-200 p-5 gap-3">
      <div className="flex flex-row w-full bg-slate-500 text-white rounded-sm p-2">
        Search : <p className="font-bold">{displayTerm}</p>
      </div>

      {results ? (
        Object.values(results).map((result) => {
          return (
            <Item
              key={result.pageid}
              result={result}
            />
          );
        })
      ) : (
        <h2>Can not find</h2>
      )}
    </main>
  );
}

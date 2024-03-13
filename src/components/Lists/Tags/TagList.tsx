import Tag from "@/entities/Tag";
import TagListItem from "./TagListItem";

interface TagListProps {
  tags: Tag[];
}

export default function TagList({ tags }: TagListProps) {

  return (
    <div className="flex flex-col gap-4 items-center">
      <ul className="h-40 w-80 overflow-auto">
        {tags.map((tag) => {
          return <TagListItem key={tag.id} tag={tag} />;
        })}
      </ul>
    </div>
  );
}

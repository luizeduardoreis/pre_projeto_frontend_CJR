import Tag from "@/entities/Tag";

interface TagSelectItemProps {
    tag: Tag;
}

export default function TagSelectItem({tag}: TagSelectItemProps) {
    return (
      <option value={tag.id}>{tag.name}</option>
    );
}
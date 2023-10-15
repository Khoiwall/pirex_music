import { MagnifyingGlassIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import Input from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="flex-1 max-w-[520px] relative lg:block hidden">
      <Input
        placeholder="Search..."
        className="bg-base-shade-01-dp  font-normal py-2.5 !pl-[52px] placeholder:!text-body-14 placeholder:font-normal placeholder:!font-default !font-default"
      />
      <Icon className="min-w-[20px] min-h-[20px] absolute top-0 bottom-0 my-auto left-4">
        <MagnifyingGlassIcon />
      </Icon>
    </div>
  );
}

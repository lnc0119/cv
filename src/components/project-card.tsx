import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  content: string;
  description: readonly string[];
  tags: readonly string[];
  link?: string;
  start?: string;
  end?: string;
}

export function ProjectCard({ title, content, description, tags, link, start, end }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="flex items-center text-base justify-between">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                {/*<span className="size-1 rounded-full bg-green-500"></span>*/}
              </a>
            ) : (
              title
            )}
            <div className="font-normal text-sm tabular-nums text-gray-500">
              {start} - {end}
            </div>
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            <div className="flex flex-col space-y-1.5">
              {content}
            </div>
            <ul className="list-disc pl-5">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardDescription>
        </div>

      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

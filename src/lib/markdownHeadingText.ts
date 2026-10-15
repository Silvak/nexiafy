import { isValidElement, type ReactNode } from "react";

/** Flattens React Markdown heading children into plain text for anchor ids. */
export function markdownHeadingText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") {
    return "";
  }
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(markdownHeadingText).join("");
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return markdownHeadingText(node.props.children);
  }
  return "";
}

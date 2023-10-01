import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import Content from "~/components/Content/content"

// import Menu from "~/components/Menu/menu"
import structure from "~/components/Content/structure"

export default component$(() => {
    const structure_items = Object.values(structure)
    return (
        <div class="Container">
            <Content items={structure_items} />
        </div>
    )
})

export const head: DocumentHead = {
  title: "stolsky.dev",
  meta: [
    {
      name: "description",
      content: ""
    }
  ]
}

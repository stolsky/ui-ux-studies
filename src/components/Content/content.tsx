import {
    type Signal,
    createContextId,
    component$,
    useContextProvider,
    useSignal,
    useStylesScoped$
} from '@builder.io/qwik'
import { type JSX } from '@builder.io/qwik/jsx-runtime'
import Page from './page'
import { type StructureItem } from './structure'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Contact from './pages/contact'

import styles from "./content.css?inline"

interface ContentProps {
    items: StructureItem[]
}

export const ActivePageContext = createContextId<Signal<boolean[]>>("active-page-context")

export default component$<ContentProps>((props) => {

    const children: JSX.Element[] = []
    children.push(<About />)
    children.push(<Skills />)
    children.push(<Contact />)
    children.push(<Projects />)

    const active_page = useSignal([true, false, false, false])
    useContextProvider(ActivePageContext, active_page)

    useStylesScoped$(styles)
    return <div class="Content">
        {props.items.map(({ id, label, color, zone }, index) => {
            return <Page key={`Page${id}`} zone={zone} label={label} color={color}>
                { children[index] }
            </Page>
        })}
    </div>
})
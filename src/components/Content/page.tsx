import { component$, Slot, useContext } from '@builder.io/qwik'
import { ActivePageContext } from './content'
import { type Zone } from './structure'

interface PageProps {
    zone: Zone
    label: string
    color: {
        light: string,
        dark: string
    }
}

export default component$<PageProps>((props) => {
    const context = useContext(ActivePageContext)
    const is_active = context.value[props.zone.index]
    return <>
        <p
            class={`Title ${props.zone.class}${is_active ? " Active" : ""}`}
            style={`color:${props.color.light};`}
        >
            {props.label}
        </p>
        <div
            class={`Page ${props.zone.class}${is_active ? " Active" : ""}`}
            style={`color:${props.color.dark}; background-color:${props.color.light}`}
            onPointerUp$={() => {
                const activation = [false, false, false, false]
                activation[props.zone.index] = true
                context.value = activation
            }}
        >
            <Slot />
        </div>
    </>
})
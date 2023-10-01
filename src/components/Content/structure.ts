interface Zone {
    index: number,
    class: string,
}

const ZoneCollection: { [key: string]: Zone } = {
    TopLeft: {
        index: 0,
        class: "TopLeft",
    },
    TopRight: {
        index: 1,
        class: "TopRight"
    },
    BottomRight: {
        index: 2,
        class: "BottomRight"
    },
    BottomLeft: {
        index: 3,
        class: "BottomLeft"
    }
} as const
// type Zones = (typeof ZoneCollection)[keyof typeof ZoneCollection]

interface StructureItem {
    readonly id: number
    readonly label: string
    readonly color: {
        light: string,
        dark: string
    },
    readonly zone: Zone
}

const structure: readonly StructureItem[] = [

    {
        id: 0,
        label: "about",
        color: {
            light: "#fdffb6",
            dark: "#767848"
        },
        zone: ZoneCollection.TopLeft
    },

    {
        id: 1,
        label: "skills",
        color: {
            light: "#caffbf",
            dark: "#567a4f"
        },
        zone: ZoneCollection.TopRight
    },
    
    {
        id: 2,
        label: "contact",
        color: {
            light: "#9bf6ff",
            dark: "#3d757b"
        },
        zone: ZoneCollection.BottomRight
    },

    {
        id: 3,
        label: "projects",
        color: {
            light: "#FFADAD",
            dark: "#824e4f"
        },
        zone: ZoneCollection.BottomLeft
    }
    
 ] as const

export default structure
export {
    type StructureItem,
    type Zone
}
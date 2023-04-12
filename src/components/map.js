import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from "react-simple-maps";

export default function MapChartCol() {
    return (
        <ComposableMap
            pointerEvents="none"
            className="lg:block xs:hidden"
            projection="geoAzimuthalEqualArea"
            style={{
                width: "100%",
                height: "100vh",
                position: "absolute",
            }}
            projectionConfig={{
                rotate: [3, 7, 2],
                center: [-90, 4],
                scale: 1650
            }}
        >
            <Geographies
                geography="/col.json"
                fill="#D6D6DA"
                stroke="#FFFFFF"
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[-75.5000000, 7.0000000]}
                dx={-50}
                dy={-40}
                connectorProps={{
                    stroke: "#661AE6",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                }}
            >
                <text x="-10" textAnchor="end" alignmentBaseline="middle" fill="#661AE6" className="text-xl font-bold">
                    {"Medellin, Ant"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

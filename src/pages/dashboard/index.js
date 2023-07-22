import { useSession } from "next-auth/react";
import Layout from "@/components/layout";

export default function Dashboard() {

    const { data: session, status } = useSession();

    console.log(session, status);
    return (
        <Layout>
            <h1>Profile</h1>
            <pre>
                {
                    JSON.stringify({
                        session,
                        status
                    },
                    null,
                    2
                    )
                }
            </pre>
        </Layout>
    )
}

import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function page({ params }) {
    const shorturl = (await params).shorturl

    const client = await clientPromise;
    const db = client.db("linkner")
    const collection = db.collection("url")

    const doc = await collection.findOne({ shorturl: shorturl })
    if (doc) {
        redirect(doc.url)
    } else {
        redirect(process.env.NEXT_PUBLIC_HOST)
    }


    return (
        <div>
            My Post : {url}
        </div>
    )
};

import { NextResponse, NextRequest } from 'next/server';
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const s3client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
})

export async function GET(req: NextRequest, {params} :{ params:{key:string[] } }) {
    try{
        const key = params.key.join("/");
        const command = new GetObjectCommand({
            Bucket:process.env.AWS_BUCKET_NAME,
            Key:key
        });

        const data = await s3client.send(command)

        const bytes = await new Response(data.Body as any).arrayBuffer();

        return new NextResponse(Buffer.from(bytes), {
            headers:{
                'Content-Type': data.ContentType || 'image/jpeg',
                'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800'
            }
        });
    }catch(err){
        console.error(err)
        return NextResponse.json({error:'Internal Server Error'},{status:500})
    }
  }
import { NextResponse} from 'next/server';
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const s3client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_STORAGE_ACCESS_KEY!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
})

export async function GET(
  req: Request,
  { params }: { params: Promise<{ key: string[] }> }
) {
    try{
        const {key} = await params;
        const fileKey = key.join("/");
        const command = new GetObjectCommand({
            Bucket:process.env.AWS_BUCKET_NAME,
            Key:fileKey
        });

        const data = await s3client.send(command)
        
        const body = data.Body!
        const bytes = await body.transformToByteArray()

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
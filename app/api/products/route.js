import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';


const images = [
    "https://netrinoimages.s3.eu-west-2.amazonaws.com/2021/03/28/820120/448020/scifi_female_outfit_5_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4604006.jpg",
    "https://www.renderhub.com/abuvalove/sci-fi-male-outfit/sci-fi-male-outfit.jpg",
    "https://netrinoimages.s3.eu-west-2.amazonaws.com/2021/03/28/820120/399398/scifi_female_outfit_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4129622.jpg",
    "https://media.sketchfab.com/models/2707c5a2601244daa4226357e63c4f76/thumbnails/379aaf0faf7f4cf592ba7e7acb135585/4590650703d34448ab6ba8e671a0dba0.jpeg",
    "https://img.pikbest.com/wp/202408/sci-fi-metal-sphere-with-glowing-energy-core-3d-rendered-object_9627179.jpg!bw700",
    "https://img.pikbest.com/wp/202408/sci-fi-isolated-hi-tech-container-on-metallic-background-a-futuristic-design-for-military-and-gaming-rendered-in-3d_9794237.jpg!w700wp",
    "https://images.starfieldwiki.net/thumb/f/fc/SF-prerelease-Semi-Auto-Eon.png/300px-SF-prerelease-Semi-Auto-Eon.png?format=webp&quality=lossless&width=375&height=300",
    "https://images.starfieldwiki.net/thumb/6/61/SF-item-Deep_Mining_Spacesuit.png/300px-SF-item-Deep_Mining_Spacesuit.png?format=webp&quality=lossless&width=306&height=668",
    "https://images.starfieldwiki.net/thumb/f/fb/SF-item-Ground_Crew_Space_Helmet.jpg/300px-SF-item-Ground_Crew_Space_Helmet.jpg",
    "https://images.starfieldwiki.net/thumb/1/15/SF-item-Alien_Genetic_Material.jpg/300px-SF-item-Alien_Genetic_Material.jpg?format=webp&width=375&height=375",
    "https://images.starfieldwiki.net/thumb/8/8b/SF-item-CoffeeCup_TB_01.png/300px-SF-item-CoffeeCup_TB_01.png?format=webp&quality=lossless&width=375&height=353"
  ];


export async function GET() {
    try {
        // Define the path to the JSON file
        const filePath = path.join(process.cwd(), 'data', 'products.json');

        // Read the file asynchronously
        const fileData = await fs.readFile(filePath, 'utf-8');

        // Parse the JSON data
        const products = JSON.parse(fileData);

        //images.forEach((img, i) => products.products[i].images[0] = img);
        //await fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf-8')

        // If no products are found, send a 404 response
        if (products.length === 0) 
            return NextResponse.json({ message: "No products found" }, { status: 404 });

        // Success response
        return NextResponse.json(products, { status: 200 });

    } catch (error) {
        console.error("Error reading JSON file: ", error);

        // Handle file or JSON parsing errors
        return NextResponse.json({ message: "An error occurred", error: error.message }, { status: 500 });
    }
}

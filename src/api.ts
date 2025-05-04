import axios from "axios";
import "jsr:@std/dotenv/load";

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

const CLIENT_ID: string | undefined = Deno.env.get("CLIENT_ID");
const CLIENT_SECRET: string | undefined = Deno.env.get("CLIENT_SECRET");

async function getSpotifyToken(): Promise<SpotifyTokenResponse> {
  try {
    const response = await axios<SpotifyTokenResponse>({
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: CLIENT_ID ?? "",
        client_secret: CLIENT_SECRET ?? "",
      }).toString(),
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error getting Spotify token:",
      error instanceof Error ? error.message : String(error)
    );
    throw error;
  }
}
const tokenResponse: SpotifyTokenResponse = await getSpotifyToken();

console.log(tokenResponse);

namespace Game {

  export interface ExternalData {
    [name: string]:{
      "health": number,
      "strength": number,
      "attackspeed": number,
      "speedMax": number
    }
  }

  export async function loadJSON(): Promise<ExternalData> {
    console.log("Start load");
    let content: ExternalData = await load("../ExternalData/data.json");
    console.log("Done load");

    console.log(content);
    return content;
  }

  async function load(_filename: string): Promise<ExternalData> {
    console.log("Start fetch");

    let response: Response = await fetch(_filename);

    let text: string = await response.text();
    let json: ExternalData = JSON.parse(text);
    // alternative: json = await response.json();

    console.log("Done fetch");
    return (json);
  }
}
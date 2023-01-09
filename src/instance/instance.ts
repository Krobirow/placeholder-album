export const initDataOfOneItemCard =  { 
	albumId: 0 as number,
	id: 0 as number,
	title: "" as string,
	url: "" as string,
	thumbnailUrl: "" as string
};

export type JSONDataResponse = typeof initDataOfOneItemCard;

export const getData = async (url: string): Promise<Array<JSONDataResponse>> => {
  const response = await fetch(url);
  return await response.json();
}

export const fetchData = async (): Promise<Array<JSONDataResponse> | Error | any>  => {
	const instanceURL : string = "https://jsonplaceholder.typicode.com/albums/1/photos";
	try {
    const photos = await getData(instanceURL);
		return photos;
  }
  catch (error: Error | any) {
    return error
  }
}
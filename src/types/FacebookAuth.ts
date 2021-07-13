export interface Profile {
	email: string;
	name: string;
	picture: Picture;
	id: string;
}

export interface Picture {
	data: PictureData;
}

export interface PictureData {
	height: number;
	width: number;
	is_silhouette: boolean;
	url: string;
}

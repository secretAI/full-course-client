import { AxiosResponse } from "axios";

export interface IPost {
  id: string;
  title: string;
  body: string;
  by: string;
  date: string;
}

export interface IResponsePost extends AxiosResponse{
	data: {
		_id: string;
		title: string;
		body: string;
		by: string;
		createdAt: string;
	}
}

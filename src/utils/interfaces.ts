export interface IRootReducer {
	UserReducer: IUserReducer,
}

export interface IUserReducer {
	accessToken: string,
}

export interface ControllerReturnI {
  statusCode: number;
  result: 'Success' | 'Error';
  message?: string;
  error?: string;
  data?: any;
}

export interface ServiceReturnI {
  result: 'Success' | 'Error';
  message?: string;
  error?: string;
  data?: any;
}

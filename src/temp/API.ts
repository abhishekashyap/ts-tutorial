type ApiResponse<T> = {
  errorMessage?: string;
  responseCode?: string;
  data?: T;
};

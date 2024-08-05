export interface RequestLogService {
  id: string;
  method: string;
  path: string;
  queryString: string;
  timestamp: string;
}

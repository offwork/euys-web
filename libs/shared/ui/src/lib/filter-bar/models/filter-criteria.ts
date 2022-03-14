export interface FilterCriteria {
  currentYear: number;
  previousYear: boolean;
}

export interface FilterFormSchema {
  year?: Date;
  month?: Date;
  start?: Date;
  end?: Date;
  line?: string;
  previousYear?: boolean;
}

// Interface for UTCTime
declare interface UTCTime {
  date: string;
  time: string;
}
declare type LocalTimeOffset = {
  minutes: number
};

// Interface for LocalTimeOffset
declare interface LocalTimeOffset {
  minutes: number;
}

// **New:** Interface for API response error
declare interface ApiError {
  error: {
    message: string;
    code: number;
  };
}

// **Combined:** Interface for NEODetails (combines best aspects of both responses)
declare interface NEODetails {
  id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachData[];
  is_sentry_object: boolean;
}

// Interface for CloseApproachData (unchanged)
declare interface CloseApproachData {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: {
    kilometers_per_second: number;
    kilometers_per_hour: number;
  };
  miss_distance: {
    kilometers: number;
    lunar_distances: number;
  };
  orbiting_body: string;
}

// Interface for NEOsByDate (unchanged)
declare interface NEOsByDate {
  [id: string]: NEODetails;
}

// Interface for NEO (unchanged)
declare interface NEO {
  links: {
    self: string;
    next: string;
    prev: string;
  };
  element_count: number;
  near_earth_objects: {
    [date: string]: NEOsByDate;
  };
}

declare interface DATOS {
  datos: NEO
}


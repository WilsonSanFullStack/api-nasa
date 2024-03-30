// Interface for UTCTime
declare interface UTCTime {
  date: string;
  time: string;
}
declare type LocalTimeOffset = {
  minutes: number;
};

// Interface for LocalTimeOffset
declare interface LocalTimeOffset {
  minutes: number;
}

// **New:** Interface for API response error
declare interface ApiError {
  error: {
    message: string | undefined;
    code: number | undefined;
  };
}

// **Combined:** Interface for NEODetails (combines best aspects of both responses)
declare interface NEODetails {
  id: string | undefined;
  name: string | undefined;
  nasa_jpl_url: string | undefined;
  absolute_magnitude_h: number | undefined;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number | undefined;
      estimated_diameter_max: number | undefined;
    };
  };
  is_potentially_hazardous_asteroid: boolean | undefined;
  close_approach_data: CloseApproachData[];
  is_sentry_object: boolean | undefined;
}

// Interface for CloseApproachData (unchanged)
declare interface CloseApproachData {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: {
    kilometers_per_second: number | undefined;
    kilometers_per_hour: number | undefined;
  };
  miss_distance: {
    kilometers: number | undefined;
    lunar_distances: number | undefined;
  };
  orbiting_body: string | undefined;
}

// Interface for NEOsByDate (unchanged)
declare interface NEOsByDate {
  [id: string | undefined]: NEODetails;
}

// Interface for NEO (unchanged)
declare interface NEO {
  links: {
    self: string | undefined;
    next: string | undefined;
    prev: string | undefined;
  };
  element_count: number | undefined;
  near_earth_objects: {
    [date: string | undefined]: NEOsByDate;
  };
}

declare interface DATOS {
  datos: NEO
}

declare interface IMAGE {
  date: string | undefined;
  explanation: string | undefined;
  hdurl: string;
  media_type: string;
  service_virsion: string | undefined;
  title: string | undefined;
  url: string | undefined;
}
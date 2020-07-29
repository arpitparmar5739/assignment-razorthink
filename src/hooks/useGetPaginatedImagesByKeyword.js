import { useEffect, useState } from "react";
import { toJson } from "unsplash-js";
import { UNSPLASH } from "../app/App";
import { PAGINATION_PAGE_SIZE } from "../constants";

function useGetPaginatedImagesByKeyword(
  imageSearchKeyword = "",
  page = 1,
  pageSize = PAGINATION_PAGE_SIZE
) {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (imageSearchKeyword) {
      UNSPLASH.search
        .photos(imageSearchKeyword, page, pageSize, { orientation: "portrait" })
        .then(toJson)
        .then((json) => {
          if (page > 1) {
            setImages((prevImages) => [...prevImages, ...json.results]);
          } else {
            setImages(json.results);
            setTotalPages(json.total_pages);
          }
        });
    }
    // else {
    //   UNSPLASH.photos
    //     .listPhotos(page, pageSize)
    //     .then(toJson)
    //     .then((json) => {
    //       console.log(json);
    //       setImages(json);
    //     });
    // }
  }, [imageSearchKeyword, page, pageSize]);

  return [images, totalPages];
}

export default useGetPaginatedImagesByKeyword;

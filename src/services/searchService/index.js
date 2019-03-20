import axios from 'axios';

class SearchService {
  query(keyword){
    return new Promise((resolve, reject) => {
      const url = `https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${keyword}`;
      
      axios.get(url).then(result => {
        resolve(result.data);
      });
    });
  }
}

export default new SearchService();
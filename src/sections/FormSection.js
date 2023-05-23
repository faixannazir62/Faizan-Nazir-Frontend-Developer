import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
function FormSection() {
  //context api Gobal varibles
  const { setFilters, SetFiltersActive } = useContext(DataContext);
  // store filters locally
  const filters = {};
  // on form submit
  const onFormSubmit = (event) => {
    event.preventDefault();
    // Get all the select fields using querySelectorAll
    var selectFields = document.querySelectorAll(".field");
    //store filter values into varibles as per there field name
    selectFields.forEach(function (select) {
      var propertyName = select.getAttribute("name");
      var selectedValue = select.value;
      filters[propertyName] = selectedValue;
      // Scroll to the bottom of the page
      window.scrollTo(0, document.body.scrollHeight);
      //Make filter Active
      SetFiltersActive(true);
    });
    // passing fillters: it was sending empty object if we direct store filters into setFilters variable.
    setFilters(filters);
  };
  return (
    <section className="main-from-sec">
      <section className="inner-from-sec">
        <h3>Find exactly what you need:</h3>
        <div className="search-flt">
          <form>
            <div className="t-two-fields-bx">
              <div className="filter">
                <select name="capsule_serial" className="field">
                  <option value="">Capsule Serial</option>
                  <option value="C101">C101</option>
                  <option value="C102">C102</option>
                  <option value="C103">C103</option>
                  <option value="C104">C104</option>
                </select>
              </div>
              <div className="filter">
                <select name="status" className="field">
                  <option value="">Status</option>
                  <option value="active">Active</option>
                  <option value="retired">Retired</option>
                  <option value="destroyed">Destroyed</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>
            </div>
            <div className="bttm-inner-bx">
              <div className="filter">
                <select name="type" className="field">
                  <option value="">Type</option>
                  <option value="dragon1">Dragon1</option>
                  <option value="dragon2">Dragon2</option>
                </select>
              </div>
              <div className="btn-box">
                <button type="submit" onClick={(event) => onFormSubmit(event)}>
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}

export default FormSection;

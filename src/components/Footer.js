import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => (
  <div>
    <span>Show: </span>
    <ButtonGroup color="primary" aria-label="outlined primary button group">
    <Button component={RouterLink} to="/">All</Button>
    { "," }
    <Button component={RouterLink} to={VisibilityFilters.SHOW_ACTIVE}>Active</Button>
    { "," }
    <Button component={RouterLink} to={VisibilityFilters.SHOW_COMPLETED}>Completed</Button>
    </ButtonGroup>
  </div>
)

export default Footer
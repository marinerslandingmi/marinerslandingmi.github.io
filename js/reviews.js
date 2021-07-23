function GetStars(rating)
{
	var htmlDisplay = "";
	htmlDisplay += '<div class="review-block-rate">';
	
	for(var i = 1; i < 6; i++)
	{
		if (i > rating)
		{
			htmlDisplay += '	<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">';
			htmlDisplay += '	    <span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
			htmlDisplay += '	</button>';
		}
		else
		{
			htmlDisplay += '	<button type="button" class="btn btn-info btn-xs" aria-label="Left Align">';
			htmlDisplay += '	    <span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
			htmlDisplay += '	</button>';
		}
	}
	
	htmlDisplay += '</div>';							
							
	return htmlDisplay;
}
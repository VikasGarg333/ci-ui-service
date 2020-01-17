package com.ci.service.modules;

import com.ci.service.exception.ApplicationException;

import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

public class CommunityInvestmentHomePortlet extends AbstractAngularPortlet {
    @Override
    protected AngularPortletConfig createAngularPortletConfiguration(String apiUrl, RenderRequest request, RenderResponse response) throws ApplicationException {
        return new AngularPortletConfig(apiUrl, getResourceBundle(request.getLocale()));
    }
}

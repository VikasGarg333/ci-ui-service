import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'jhi-projectreview',
  templateUrl: './projectreview.component.html'
})
export class ProjectReviewComponent implements OnInit {
  projectNo: any;
  snapshotForm: FormGroup;
  reviewForm: FormGroup;
  reviewInfo: any;
  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private projectsService: ProjectsService) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.projectNo = +params.get('projectNo');
      if (this.projectNo) {
        // eslint-disable-next-line no-console
      }
    });
    this.projectsService.getApplicationReviewDetails(this.projectNo).subscribe((res: any) => {
      this.reviewInfo = res;
      this.snapshotForm.patchValue({
        applicationDate: this.reviewInfo.applicationDate,
        totalAmountRequested: this.reviewInfo.totalAmountRequested,
        analystReviewEndDate: this.reviewInfo.analystReviewEndDate,
        managerDecision: this.reviewInfo.managerDecision,
        managerReviewEndDate: this.reviewInfo.managerReviewEndDate,
        totalReviewTurntime: this.reviewInfo.totalReviewTurntime,
        notificationSentDate: this.reviewInfo.notificationSentDate,
        certifiationName: this.reviewInfo.certifiationName,
        certificationTitle: this.reviewInfo.certificationTitle,
        certificationDate: this.reviewInfo.certificationDate,
        projectSpecificApplication: this.reviewInfo.projectSpecificApplication,
        projectNameMemberSpecified: this.reviewInfo.projectNameMemberSpecified,
        projectDescription: this.reviewInfo.projectDescription,
        currentReviewStatus: this.reviewInfo.currentReviewStatus,
        currentAssignment: this.reviewInfo.currentAssignment,
        currentAssignmentStartDate: this.reviewInfo.currentAssignmentStartDate,
        currentTurntimeDaysElapsed: this.reviewInfo.currentTurntimeDaysElapsed,
        assignedAnalyst: this.reviewInfo.assignedAnalyst,
        analystReviewStartDate: this.reviewInfo.analystReviewStartDate,
        analystTurntime: this.reviewInfo.analystTurntime,
        analystComments: this.reviewInfo.analystComments,
        analystRecommendation: this.reviewInfo.analystRecommendation,
        assinedManager: this.reviewInfo.assinedManager,
        managerReviewStartDate: this.reviewInfo.managerReviewStartDate,
        managerTurntime: this.reviewInfo.managerTurntime,
        managerComments: this.reviewInfo.managerComments
      });
    });
  }

  ngOnInit() {
    this.snapshotForm = this.fb.group({
      applicationDate: [{ value: null, disabled: true }],
      totalAmountRequested: [{ value: null, disabled: true }],
      analystReviewEndDate: [{ value: null, disabled: true }],
      managerDecision: [{ value: null, disabled: true }],
      managerReviewEndDate: [{ value: null, disabled: true }],
      totalReviewTurntime: [{ value: null, disabled: true }],
      notificationSentDate: [{ value: null, disabled: true }],
      certifiationName: [{ value: null, disabled: false }],
      certificationTitle: [{ value: null, disabled: false }],
      certificationDate: [{ value: null, disabled: false }],
      projectSpecificApplication: [{ value: null, disabled: false }],
      projectNameMemberSpecified: [{ value: null, disabled: true }],
      projectDescription: [{ value: null, disabled: true }],
      currentReviewStatus: [{ value: null, disabled: true }],
      currentAssignment: [{ value: null, disabled: true }],
      currentAssignmentStartDate: [{ value: null, disabled: true }],
      currentTurntimeDaysElapsed: [{ value: null, disabled: true }],
      assignedAnalyst: [{ value: null, disabled: true }],
      analystReviewStartDate: [{ value: null, disabled: true }],
      analystTurntime: [{ value: null, disabled: true }],
      analystComments: [{ value: null, disabled: false }],
      analystRecommendation: [{ value: null, disabled: false }],
      assinedManager: [{ value: null, disabled: true }],
      managerReviewStartDate: [{ value: null, disabled: true }],
      managerTurntime: [{ value: null, disabled: true }],
      managerComments: [{ value: null, disabled: true }]
    });
  }
}

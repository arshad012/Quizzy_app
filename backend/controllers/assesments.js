import { Assesment } from "../models/index.js";
import {
    calculateTotalMarks,
    createAssesmentQuestions,
} from "../utils/index.js";

export const createAssesmentFromUI = async (req, res, next) => {
    try {
        const assesment = new Assesment(req.body);
        
        const questions = await createAssesmentQuestions(assesment);
        const totalMarks = calculateTotalMarks(questions);
        
        assesment.totalMarks = totalMarks;
        assesment.questions = questions;
                
        await assesment.save();

        return res.status(201).json({
            success: true,
            assesment,
        });
    } catch (e) {
        const error = new Error("Failed to create assesment from UI", {
            cause: e,
        });
        return next(error)
    }
};

export const createAssessment = async (req, res, next) => {
    try {
        const { questions = [] } = req.body;
        const totalMarks = calculateTotalMarks(questions);

        const assesment = new Assesment(req.body);
        assesment.totalMarks = totalMarks;

        await assesment.save();

        return res.status(201).json({
            success: true,
            assesment,
        });
    } catch (e) {
        const error = new Error("Failed to create assement", {
            cause: e,
        });
        return next(error);
    }
};

export const getAllAssessments = async (req, res, next) => {
    try {
        const assesments = await Assesment.find({}).populate("template");

        return res.status(200).json({
            success: true,
            data: assesments,
        });
    } catch (e) {
        const error = new Error("Failed to fetch assessments", {
            cause: e,
        });
        return next(error);
    }
};

export const getAssessmentById = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) {
            const error = new Error("Assesment ID is required", {
                cause: new Error("Assesment ID is required"),
            });
            return next(error);
        }

        const assesment = await Assesment.findById(id).populate('questions');

        return res.status(200).json({
            success: true,
            data: assesment,
        });
    } catch (e) {
        const error = new Error("Failed to fetch assesment by ID", {
            cause: e,
        });
        return next(error);
    }
};

export const deleteAssessmentById = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (!id) {
            const error = new Error("Assesement ID is required", {
                cause: new Error("Assesement ID is required"),
            });
            return next(error);
        }

        const assesment = await Assesment.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            data: assesment,
        });
    } catch (e) {
        const error = new Error(`Failed to delete assesment by ID: ${id}`, {
            cause: e,
        });
        return next(error);
    }
};
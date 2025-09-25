import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'

import { useHeading } from "../../../../Hooks";
import Loading from "../../../../Components/Common/Loading";

import TemplatesBasicDetailsForm from "../../../../Components/Teacher/Templates/Create/BasicDetailsForm";
import AddQuestionType from "../../../../Components/Teacher/Templates/Create/AddQuestionType";
import QuestionTypes from "../../../../Components/Teacher/Templates/QuestionTypes";

import { resetTemplteState } from "../../../../Store/feature/template/templateSlice";

import { useGetTemplateQuery } from "../../../../Store/feature/template/api";
import CreateTemplateButton from "../../../../Components/Teacher/Templates/Create/CreateTemplateButton";
import AuthFailed from "../../../../Components/AuthFailed";
import SomethingWrong from "../../../../Components/SomethingWrong";


function CreateTemplatePage() {
    const { setHeading, setSubHeading } = useHeading();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { isLoading, error } = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
        skip: !id
    });

    useEffect(() => {
        setHeading('New Template');
        setSubHeading('You can create a fresh new template here');

        return () => {
            dispatch(
                resetTemplteState()
            )
        }
    }, [])

    if (isLoading) {
        return <Loading />
    }
    if (error && error?.data?.authenticationFailed) {
        return <AuthFailed />;
    }
    else if (error) {
        return <SomethingWrong />;
    }

    return (
        <div className="h-full overflow-auto bg-white">
            <TemplatesBasicDetailsForm />

            <hr className="my-5" />

            <QuestionTypes />

            <AddQuestionType />

            <CreateTemplateButton />
        </div>
    )
}

export default CreateTemplatePage

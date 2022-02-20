<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Survey;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Redirect;

class SurveyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Survey/Create/index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'gender' => 'required',
                'age' => 'required',
                'continent' => 'required',
                'often_play' => 'required',
                'acquire_games' => 'required',
                'price' => 'required',
                'platform' => 'required',
                'company' => 'required',
                'console' => 'required',
                'prefer_play' => 'required',
                'most_anticipated' => 'required',
            ]
        );

        Survey::create($request->all());
        return Redirect::route('dashboard');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function show(Survey $survey)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function edit(Survey $survey)
    {
        return Inertia::render('Survey/Edit/index', ['survey' => $survey]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Survey $survey)
    {
        $survey->update($request->all());
        return Redirect::route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function destroy(Survey $survey)
    {
        //
    }

    public function verified(int $user)
    {
        $survey = Survey::where('user_id', $user)->get()->first();

        return is_null($survey)
            ? redirect()->route('survey.create')
            : redirect()->route('survey.edit', ['survey' => $survey]);
    }
}
